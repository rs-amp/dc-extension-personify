import React, { useState, useEffect } from 'react';
import { withStyles, WithStyles, Theme } from '@material-ui/core';
import CoverageReport from '../CoverageReport/CoverageReport';
import useInterval from 'react-useinterval';
import { withRetry } from '../../utils/withRetry';
import { fetchMissionData } from '../../services/fetchMissionData';
import { useSdkContext } from '../SdkContext';

const styles = (theme: Theme) => ({});

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: React.CSSProperties;
}

const ManagedCoverageReport = (props: Props) => {
  const sdk = useSdkContext();

  const [criteria, setCriteria] = useState<{
    missions: string[];
    tags: string[];
  }>({
    missions: [],
    tags: [],
  });

  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [suggestedTarget, setSuggestedTarget] = useState<any>(null);

  const fetchContent = async () => {
    if (!sdk) {
      return;
    }

    try {
      const body = await sdk.form.getValue();
      let foundMissions: string[] = [];
      let foundTags: string[] = [];

      for (let group of body.groups) {
        const { behaviors = [], tags = [] } = group.criteria || {};
        foundMissions = [...foundMissions, ...(behaviors || [])];
        foundTags = [...foundTags, ...(tags || [])];
      }

      foundMissions = Array.from(new Set(foundMissions));
      foundTags = Array.from(new Set(foundTags));

      if (foundMissions.join(',') !== criteria.missions.join(',') || foundTags.join(',') !== criteria.tags.join(',')) {
        setCriteria({
          missions: foundMissions,
          tags: foundTags,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCoverageReport = async () => {
    const apiUrl = sdk?.params.installation.apiUrl;

    setIsLoading(true);
    const data = await withRetry(() => fetchMissionData(apiUrl, criteria.missions, criteria.tags), 'personify');

    const { coverage, suggested_target, missions } = data;

    if (coverage) {
      setValue(coverage);
    }

    if (suggested_target && suggested_target.target !== undefined) {
      if (suggested_target.type === 'TAG') {
        setSuggestedTarget({
          target: suggested_target.target,
          type: 'TAG',
          coverage: suggested_target.possible_coverage,
        });
      } else {
        const mission = missions.find((x: any) => x.mission_id === suggested_target.target);
        if (mission) {
          setSuggestedTarget({
            target: mission.mission_name,
            type: 'MISSION',
            coverage: suggested_target.possible_coverage,
          });
        } else {
          setSuggestedTarget(null);
        }
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchCoverageReport();
  }, [criteria]);

  useEffect(() => {
    fetchContent();
  }, []);

  useInterval(fetchContent, 3000);

  return (
    <CoverageReport
      value={value}
      loading={isLoading}
      missions={criteria.missions}
      tags={criteria.tags}
      suggestedTarget={suggestedTarget}
    />
  );
};

export default withStyles(styles)(ManagedCoverageReport);
