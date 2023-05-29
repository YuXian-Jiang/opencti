import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import {
  BiotechOutlined,
  BugReportOutlined,
  SurroundSoundOutlined,
  EventOutlined,
  SpeakerNotesOutlined,
} from '@mui/icons-material';
import { LockPattern, LaptopAccount, ProgressWrench } from 'mdi-material-ui';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles/createTheme';
import { useFormatter } from '../../../components/i18n';
import { useIsHiddenEntity } from '../../../utils/hooks/useEntitySettings';

const useStyles = makeStyles<Theme>((theme) => ({
  button: {
    marginRight: theme.spacing(2),
    padding: '0 5px 0 5px',
    minHeight: 20,
    minWidth: 20,
    textTransform: 'none',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const TopMenuFimi = () => {
  const classes = useStyles();
  const location = useLocation();
  const { t } = useFormatter();

  return (
    <div>
      {!useIsHiddenEntity('Fimi-Incident') && (
        <Button
          component={Link}
          to="/dashboard/fimi/incidents"
          variant={
            location.pathname === '/dashboard/fimi/incidents'
              ? 'contained'
              : 'text'
          }
          size="small"
          color={
            location.pathname === '/dashboard/fimi/incidents'
              ? 'secondary'
              : 'primary'
          }
          classes={{ root: classes.button }}
        >
          <BiotechOutlined className={classes.icon} fontSize="small" />
          {t('Incident')}
        </Button>
      )}

      {!useIsHiddenEntity('Fimi-Threat-Actor') && (
        <Button
          component={Link}
          to="/dashboard/fimi/threat_actors"
          variant={
            location.pathname.includes(
              '/dashboard/fimi/threat_actors',
            )
              ? 'contained'
              : 'text'
          }
          size="small"
          color={
            location.pathname.includes(
              '/dashboard/fimi/threat_actors',
            )
              ? 'secondary'
              : 'primary'
          }
          classes={{ root: classes.button }}
        >
          <LaptopAccount className={classes.icon} fontSize="small" />
          {t('Threat actors')}
        </Button>
      )}

      {!useIsHiddenEntity('Fimi-Attack-Pattern') && (
        <Button
          component={Link}
          to="/dashboard/fimi/attack_patterns"
          variant={
            location.pathname.includes(
              '/dashboard/fimi/attack_patterns',
            )
              ? 'contained'
              : 'text'
          }
          size="small"
          color={
            location.pathname.includes(
              '/dashboard/fimi/attack_patterns',
            )
              ? 'secondary'
              : 'primary'
          }
          classes={{ root: classes.button }}
        >
          <LockPattern className={classes.icon} fontSize="small" />
          {t('Attack Patterns')}
        </Button>
      )}

      {!useIsHiddenEntity('Fimi-Course-Of-Action') && (
        <Button
          component={Link}
          to="/dashboard/fimi/courses_of_action"
          variant={
            location.pathname === '/dashboard/fimi/courses_of_action'
              ? 'contained'
              : 'text'
          }
          size="small"
          color={
            location.pathname === '/dashboard/fimi/courses_of_action'
              ? 'secondary'
              : 'primary'
          }
          classes={{ root: classes.button }}
        >
          <ProgressWrench className={classes.icon} fontSize="small" />
          {t('Courses of action')}
        </Button>
      )}

      {!useIsHiddenEntity('Fimi-Vulnerability') && (
        <Button
          component={Link}
          to="/dashboard/fimi/vulnerabilities"
          variant={
            location.pathname === '/dashboard/fimi/vulnerabilities'
              ? 'contained'
              : 'text'
          }
          size="small"
          color={
            location.pathname === '/dashboard/fimi/vulnerabilities'
              ? 'secondary'
              : 'primary'
          }
          classes={{ root: classes.button }}
        >
          <BugReportOutlined className={classes.icon} fontSize="small" />
          {t('Vulnerabilities')}
        </Button>
      )}

      {!useIsHiddenEntity('Fimi-Channel') && (
        <Button
          component={Link}
          to="/dashboard/fimi/channels"
          variant={
            location.pathname === '/dashboard/fimi/channels'
              ? 'contained'
              : 'text'
          }
          size="small"
          color={
            location.pathname === '/dashboard/fimi/channels'
              ? 'secondary'
              : 'primary'
          }
          classes={{ root: classes.button }}
        >
          <SurroundSoundOutlined
            className={classes.icon}
            fontSize="small"
          />
          {t('Channels')}
        </Button>
      )}

      {!useIsHiddenEntity('Fimi-Event') && (
        <Button
          component={Link}
          to="/dashboard/fimi/events"
          variant={
            location.pathname === '/dashboard/fimi/events'
              ? 'contained'
              : 'text'
          }
          size="small"
          color={
            location.pathname === '/dashboard/fimi/events'
              ? 'secondary'
              : 'primary'
          }
          classes={{ root: classes.button }}
        >
          <EventOutlined className={classes.icon} fontSize="small" />
          {t('Events')}
        </Button>
      )}

      {!useIsHiddenEntity('Fimi-Narrative') && (
        <Button
          component={Link}
          to="/dashboard/fimi/narratives"
          variant={
            location.pathname === '/dashboard/fimi/narratives'
              ? 'contained'
              : 'text'
          }
          size="small"
          color={
            location.pathname === '/dashboard/fimi/narratives'
              ? 'secondary'
              : 'primary'
          }
          classes={{ root: classes.button }}
        >
          <SpeakerNotesOutlined className={classes.icon} fontSize="small" />
          {t('Narratives')}
        </Button>
      )}

      {/* {!useIsHiddenEntity('Report') && (
          <Button
            component={Link}
            to="/dashboard/analysis/reports"
            variant={
              location.pathname === '/dashboard/analysis/reports'
                ? 'contained'
                : 'text'
            }
            size="small"
            color={
              location.pathname === '/dashboard/analysis/reports'
                ? 'secondary'
                : 'primary'
            }
            classes={{ root: classes.button }}
          >
            <DescriptionOutlined className={classes.icon} fontSize="small" />
            {t('Reports')}
          </Button>
        )} */}
      {/* {!useIsHiddenEntity('Grouping') && (
          <Button
            component={Link}
            to="/dashboard/analysis/groupings"
            variant={
              location.pathname === '/dashboard/analysis/groupings'
                ? 'contained'
                : 'text'
            }
            size="small"
            color={
              location.pathname === '/dashboard/analysis/groupings'
                ? 'secondary'
                : 'primary'
            }
            classes={{ root: classes.button }}
          >
            <WorkspacesOutlined className={classes.icon} fontSize="small" />
            {t('Groupings')}
          </Button>
        )} */}
      {/* {!useIsHiddenEntity('Note') && (
          <Button
            component={Link}
            to="/dashboard/analysis/notes"
            variant={
              location.pathname === '/dashboard/analysis/notes'
                ? 'contained'
                : 'text'
            }
            size="small"
            color={
              location.pathname === '/dashboard/analysis/notes'
                ? 'secondary'
                : 'primary'
            }
            classes={{ root: classes.button }}
          >
            <SubjectOutlined className={classes.icon} fontSize="small" />
            {t('Notes')}
          </Button>
        )} */}
      {/* {!useIsHiddenEntity('Opinion') && (
          <Button
            component={Link}
            to="/dashboard/analysis/opinions"
            variant={
              location.pathname === '/dashboard/analysis/opinions'
                ? 'contained'
                : 'text'
            }
            size="small"
            color={
              location.pathname === '/dashboard/analysis/opinions'
                ? 'secondary'
                : 'primary'
            }
            classes={{ root: classes.button }}
          >
            <ReviewsOutlined className={classes.icon} fontSize="small" />
            {t('Opinions')}
          </Button>
        )} */}
      {/* <Button
          component={Link}
          to="/dashboard/analysis/external_references"
          variant={
            location.pathname === '/dashboard/analysis/external_references'
              ? 'contained'
              : 'text'
          }
          size="small"
          color={
            location.pathname === '/dashboard/analysis/external_references'
              ? 'secondary'
              : 'primary'
          }
          classes={{ root: classes.button }}
        >
          <LocalOfferOutlined className={classes.icon} fontSize="small" />
          {t('External references')}
        </Button> */}
    </div>
  );
};

export default TopMenuFimi;
