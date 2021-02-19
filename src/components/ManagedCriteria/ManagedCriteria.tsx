import React, { useState, useEffect } from 'react';
import { withStyles, WithStyles, Theme } from '@material-ui/core';
import CriteriaField from '../CriteriaField/CriteriaField';
import { useSdkContext } from '../SdkContext';
import { fetchMissionData } from '../../services/fetchMissionData';
import { withRetry } from '../../utils/withRetry';
import { toPercentage } from '../../utils/toPercentage';

const styles = (theme: Theme) => ({
  root: {},
  behaviours: {},
  tags: {
    marginTop: 20,
  },
});

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: React.CSSProperties;
}

const ManagedCriteria = (props: Props) => {
  const { classes } = props;

  const sdk = useSdkContext();

  const [allBehaviours, setAllBehaviours] = useState<string[]>([]);
  const [behaviours, setBehaviours] = useState<string[]>([]);
  const [behaviorsIsLoading, setBehaviorsIsLoading] = useState(false);
  const [behaviorsInfoMessage, setBehaviorsInfoMessage] = useState('');

  const [allTags, setAllTags] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tagsIsLoading, setTagsIsLoading] = useState(false);
  const [tagsInfoMessage, setTagsInfoMessage] = useState('');
  const [error, setError] = useState<Error>();
  const apiUrl = sdk?.params.installation.apiUrl;

  const fetchOptions = async () => {
    try {
      const missionData = await withRetry(() => fetchMissionData(apiUrl, [], []), 'personify');
      setAllBehaviours(missionData.missions.map((mission: any) => mission.mission_name));
      setAllTags(missionData.tags);
    } catch (err) {
      console.log('Unable to retrieve data', err);
      err.message = 'We are unable to retrieve data.';
      setError(err);
    }
  };

  const fetchBehavioursCoverage = async () => {
    let input = behaviours;
    setBehaviorsIsLoading(true);
    const data = await withRetry(() => fetchMissionData(apiUrl, input, []), 'personify');
    if (input === behaviours) {
      setBehaviorsInfoMessage(`Selected behaviours target ${toPercentage(data.coverage)}% of average website traffic`);
      setBehaviorsIsLoading(false);
    }
  };

  const fetchTagsCoverage = async () => {
    let input = tags;
    setTagsIsLoading(true);
    const data = await withRetry(() => fetchMissionData(apiUrl, [], input), 'personify');
    if (input === tags) {
      setTagsInfoMessage(`Selected tags target ${toPercentage(data.coverage)}% of average website traffic`);
      setTagsIsLoading(false);
    }
  };

  const handleSetFieldValue = (value: any) => {
    if (!sdk) {
      return;
    }
    sdk.field.setValue(value);
  };

  const handleChangeBehaviors = (values: string[]) => {
    setBehaviours(values);
    handleSetFieldValue({
      behaviors: values,
      tags: tags,
    });
  };

  const handleChangeTags = (values: string[]) => {
    setTags(values);
    handleSetFieldValue({
      behaviors: behaviours,
      tags: values,
    });
  };

  useEffect(() => {
    fetchBehavioursCoverage();
  }, [behaviours]);

  useEffect(() => {
    fetchTagsCoverage();
  }, [tags]);

  useEffect(() => {
    fetchOptions();
  }, []);

  useEffect(() => {
    if (sdk) {
      sdk.field.getValue().then((value) => {
        if (!value) {
          return;
        }
        if (value.behaviors) {
          setBehaviours(value.behaviors);
        }
        if (value.tags) {
          setTags(value.tags);
        }
      });
    }
  }, [sdk]);

  return (
    <div className={classes.root}>
      <CriteriaField
        label="Behaviours"
        description=""
        options={allBehaviours}
        selected={behaviours}
        onChange={handleChangeBehaviors}
        infoMessage={behaviorsInfoMessage}
        infoLoading={behaviorsIsLoading}
        error={error}
        className={classes.behaviours}
      />

      <CriteriaField
        label="Tags"
        description=""
        options={allTags}
        selected={tags}
        onChange={handleChangeTags}
        infoMessage={tagsInfoMessage}
        infoLoading={tagsIsLoading}
        error={error}
        className={classes.tags}
      />
    </div>
  );
};

export default withStyles(styles)(ManagedCriteria);
