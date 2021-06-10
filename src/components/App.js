import React, { useState, useEffect } from 'react';
import { teal, indigo } from '@material-ui/core/colors';
import { Container, Row } from 'react-bootstrap';

import CalendarContainer from './CalendarContainer';
import Loader from './Loader';
import aipm from '../services/api';
import logo from '../assets/aipm-logo.png';

const App = () => {
  const [technicians, setTechnicians] = useState([]);
  const [workOrders, setWorkOrders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await aipm.get('/technicians');
      setTechnicians(res.data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (!workOrders.length) {
      for (let technician of technicians) {
        setWorkOrders((oldWorkOrders) => [
          ...oldWorkOrders,
          ...technician.work_orders,
        ]);
      }
    }
  }, [technicians, workOrders]);

  const configureTechnicians = () => {
    const data = [];
    for (let technician of technicians) {
      data.push({
        text: technician.name,
        id: technician.id,
        color: technician.id % 2 === 0 ? teal : indigo,
      });
    }
    return data;
  };

  //! "2000-01-01T06:00:00.000-08:00"

  const configureDate = (date, duration = 0) => {
    let hour = parseInt(date.split('T')[1].split(':')[0]);
    let min = parseInt(date.split('T')[1].split(':')[1]) + duration;
    if (min >= 60) {
      hour += Math.floor(min / 60);
      min %= 60;
    }
    return new Date(2019, 9, 19, hour, min);
  };

  const configureWorkOrders = () => {
    console.log(workOrders);
    const data = [];
    for (let workOrder of workOrders) {
      data.push({
        id: workOrder.id,
        title: `${workOrder.location.name}, ${workOrder.location.city} $${workOrder.price}`,
        technicians: [workOrder.technician.id],
        startDate: configureDate(workOrder.time),
        endDate: configureDate(workOrder.time, workOrder.duration),
      });
    }
    return data;
  };

  return (
    <div>
      {technicians.length && workOrders.length ? (
        <Container fluid>
          <Row className='justify-content-center'>
            <img src={logo} alt='aipm-logo' style={{ width: '100px' }} />
          </Row>
          <CalendarContainer
            technicians={configureTechnicians()}
            workOrders={configureWorkOrders()}
          />
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default App;
