import React, { createRef } from 'react';
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
    this.calendarRef = createRef();
  }

  onOpenSpaceClick = (e) => {
    if (
      e.target.localName === 'td' &&
      e.target.className ===
        'MuiTableCell-root MuiTableCell-body makeStyles-cell-73 makeStyles-brightRightBorder-76'
    ) {
      const next = this.getPreviousWorkOrder(e.clientX, e.clientY);
      if (next) {
        console.log(this.convertTimeText(next.innerText));
        console.log(next);
      }
    }
  };

  convertTimeText = (time) => {
    let hours = parseInt(time.split(':')[0]);
    let mins = parseInt(time.split(':')[1].split(' ')[0]);
    const isAfternoon = time.split(' ')[1] === 'PM';
    if (isAfternoon) hours += 12;
    return hours * 60 + mins;
  };

  getPreviousWorkOrder = (x, y) => {
    let newY = y - 5;
    let i = 0;
    while (
      document.elementFromPoint(x, newY) &&
      !document
        .elementFromPoint(x, newY)
        .classList.contains('makeStyles-appointment-128') &&
      i > -300
    ) {
      newY -= 5;
      i--;
    }
    const time = this.getTimeChild(document.elementFromPoint(x, newY), false);
    return time;
  };

  getNextWorkOrder = (x, y) => {
    let newY = y + 5;
    let i = 0;
    while (
      document.elementFromPoint(x, newY) &&
      !document
        .elementFromPoint(x, newY)
        .classList.contains('makeStyles-appointment-128') &&
      i < 300
    ) {
      newY += 5;
      i++;
    }
    const time = this.getTimeChild(document.elementFromPoint(x, newY));
    return time;
    // const start = document.elementFromPoint(x, newY);
    // if (!start) return;
    // const nextChild = start.children[0];
    // if (!nextChild) return;
    // const grandChild = nextChild.children[0];
    // if (!grandChild) return;
    // const lastChild = grandChild.children[1];
    // if (!lastChild) return grandChild.children[0].children[1];
    // return lastChild.firstChild;
  };

  getTimeChild = (elem, next = true) => {
    if (!elem) return;
    const nextChild = elem.children[0];
    if (!nextChild) return;
    const grandChild = nextChild.children[0];
    if (!grandChild) return;
    const last = grandChild.children[1];
    if (!last) return grandChild.children[0].children[1];
    return next ? last.firstChild : last.lastChild;
  };

  render() {
    const { resources, grouping } = this.state;

    return (
      <div ref={this.calendarRef} onClick={this.onOpenSpaceClick}>
        <Paper>
          <Scheduler data={this.props.workOrders}>
            <ViewState defaultCurrentDate='2019-10-19' />
            <GroupingState grouping={grouping} />

            <DayView
              startDayHour={6}
              endDayHour={18}
              intervalCount={1}
              cellDuration={60}
              ref={this.calendarRef}
            />
            <Appointments />
            <Resources data={resources} mainResourceName='technicians' />

            <IntegratedGrouping />

            <AppointmentTooltip showOpenButton />
            <AppointmentForm />
            <GroupingPanel />
          </Scheduler>
        </Paper>
      </div>
    );
  }
}

export default CalendarContainer;
