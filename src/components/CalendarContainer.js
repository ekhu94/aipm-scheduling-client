import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ViewState,
  GroupingState,
  IntegratedGrouping,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentTooltip,
  GroupingPanel,
  DayView,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';

class CalendarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [
        {
          fieldName: 'technicians',
          title: 'Technicians',
          instances: this.props.technicians,
          allowMultiple: true,
        },
      ],
      grouping: [
        {
          resourceName: 'technicians',
        },
      ],
    };
  }

  render() {
    const { resources, grouping } = this.state;

    return (
      <Paper>
        <Scheduler data={this.props.workOrders}>
          <ViewState defaultCurrentDate='2019-10-19' />
          <GroupingState grouping={grouping} />

          <DayView
            startDayHour={6}
            endDayHour={18}
            intervalCount={1}
            cellDuration={60}
          />
          <Appointments />
          <Resources data={resources} mainResourceName='technicians' />

          <IntegratedGrouping />

          <AppointmentTooltip showOpenButton />
          <AppointmentForm />
          <GroupingPanel />
        </Scheduler>
      </Paper>
    );
  }
}

export default CalendarContainer;
