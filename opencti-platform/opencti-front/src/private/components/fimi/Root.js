import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { BoundaryRoute } from '../Error';
import Incidents from '../events/Incidents';
import RootIncident from '../events/incidents/Root';
import ThreatActors from '../threats/ThreatActors';
import RootThreatActor from '../threats/threat_actors/Root';
import AttackPatterns from '../techniques/AttackPatterns';
import RootAttackPattern from '../techniques/attack_patterns/Root';
import CoursesOfAction from '../techniques/CoursesOfAction';
import RootCourseOfAction from '../techniques/courses_of_action/Root';
import Vulnerabilities from '../arsenal/Vulnerabilities';
import RootVulnerabilities from '../arsenal/vulnerabilities/Root';
import Channels from '../arsenal/Channels';
import RootChannel from '../arsenal/channels/Root';
import Events from '../entities/Events';
import RootEvent from '../entities/events/Root';
import Narratives from '../techniques/Narratives';
import RootNarrative from '../techniques/narratives/Root';
// import Reports from './Reports';
// import RootReport from './reports/Root';
// import Groupings from './Groupings';
// import RootGrouping from './groupings/Root';
// import Notes from './Notes';
// import RootNote from './notes/Root';
// import Opinions from './Opinions';
// import RootOpinion from './opinions/Root';
// import ExternalReferences from './ExternalReferences';
// import RootExternalReference from './external_references/Root';
import { useIsHiddenEntity } from '../../../utils/hooks/useEntitySettings';

const Root = () => {
  let redirect = null;
  if (!useIsHiddenEntity('Fimi-Incident')) {  // 新增 Incident
    redirect = 'incidents';
  } else if (!useIsHiddenEntity('Fimi-Threat-Actor')) {
    redirect = 'threat_actors';
  } else if (!useIsHiddenEntity('Fimi-Attack-Pattern')) {
    redirect = 'attack_patterns';
  } else if (!useIsHiddenEntity('Fimi-Course-Of-Action')) {
    redirect = 'courses_of_action';
  } else if (!useIsHiddenEntity('Fimi-Vulnerability')) {
    redirect = 'vulnerabilities';
  } else if (!useIsHiddenEntity('Fimi-Channel')) {
    redirect = 'channels';
  } else if (!useIsHiddenEntity('Fimi-Event')) {
    redirect = 'events';
  } else if (!useIsHiddenEntity('Fimi-Narrative')) {
    redirect = 'narratives';
  }
  
  // else if (!useIsHiddenEntity('Grouping')) {
  //   redirect = 'groupings';
  // } else if (!useIsHiddenEntity('Note')) {
  //   redirect = 'notes';
  // } else if (!useIsHiddenEntity('Opinion')) {
  //   redirect = 'opinions';
  // } else {
  //   redirect = 'external_references';
  // }
  return (
    <Switch>
      <BoundaryRoute
        exact
        path="/dashboard/fimi"
        render={() => <Redirect to={`/dashboard/fimi/${redirect}`} />}
      />
      <BoundaryRoute
        exact
        path="/dashboard/fimi/incidents"
        component={Incidents}
      />
      <BoundaryRoute
        path="/dashboard/fimi/incidents/:incidentId"
        component={RootIncident}
      />
      <BoundaryRoute
        exact
        path="/dashboard/fimi/threat_actors"
        component={ThreatActors}
      />
      <BoundaryRoute
        path="/dashboard/fimi/threat_actors/:threatActorId"
        component={RootThreatActor}
      />
      <BoundaryRoute
        exact
        path="/dashboard/fimi/attack_patterns"
        component={AttackPatterns}
      />
      <BoundaryRoute
        path="/dashboard/fimi/attack_patterns/:attackPatternId"
        component={RootAttackPattern}
      />
      <BoundaryRoute
        exact
        path="/dashboard/fimi/courses_of_action"
        component={CoursesOfAction}
      />
      <BoundaryRoute
        path="/dashboard/fimi/courses_of_action/:courseOfActionId"
        component={RootCourseOfAction}
      />
      <BoundaryRoute
        exact
        path="/dashboard/fimi/vulnerabilities"
        component={Vulnerabilities}
      />
      <BoundaryRoute
        path="/dashboard/fimi/vulnerabilities/:vulnerabilityId"
        component={RootVulnerabilities}
      />
      <BoundaryRoute
        exact
        path="/dashboard/fimi/channels"
        component={Channels}
      />
      <BoundaryRoute
        path="/dashboard/fimi/channels/:channelId"
        component={RootChannel}
      />
      <BoundaryRoute
        exact
        path="/dashboard/fimi/events"
        component={Events}
      />
      <BoundaryRoute
        path="/dashboard/fimi/events/:eventId"
        component={RootEvent}
      />
      <BoundaryRoute
        exact
        path="/dashboard/fimi/narratives"
        component={Narratives}
      />
      <BoundaryRoute
        path="/dashboard/fimi/narratives/:narrativeId"
        component={RootNarrative}
      />
      {/* <BoundaryRoute
        exact
        path="/dashboard/analysis/reports"
        component={Reports}
      />
      <BoundaryRoute
        path="/dashboard/analysis/reports/:reportId"
        component={RootReport}
      /> */}
      {/* <BoundaryRoute
        exact
        path="/dashboard/analysis/groupings"
        component={Groupings}
      />
      <BoundaryRoute
        path="/dashboard/analysis/groupings/:groupingId"
        component={RootGrouping}
      /> */}
      {/* <BoundaryRoute
        exact
        path="/dashboard/analysis/notes"
        component={Notes} />
      <BoundaryRoute
        path="/dashboard/analysis/notes/:noteId"
        component={RootNote}
      /> */}
      {/* <BoundaryRoute
        exact
        path="/dashboard/analysis/opinions"
        component={Opinions}
      />
      <BoundaryRoute
        path="/dashboard/analysis/opinions/:opinionId"
        component={RootOpinion}
      /> */}
      {/* <BoundaryRoute
        exact
        path="/dashboard/analysis/external_references"
        component={ExternalReferences}
      />
      <BoundaryRoute
        path="/dashboard/analysis/external_references/:externalReferenceId"
        component={RootExternalReference}
      /> */}
    </Switch>
  );
};

export default Root;
