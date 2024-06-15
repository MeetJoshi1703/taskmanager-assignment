import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import CreateTaskModal from '../components/CreateTaskModal';
// import Quote from '../components/Quote';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/tasks/');
                const data = await res.json();
                if (res.ok) {
                    setTasks(data);
                } else {
                    throw new Error(data.error || 'Failed to fetch tasks');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const refetchTasks = async () => {
        try {
            const res = await fetch('/api/tasks/');
            const data = await res.json();
            if (res.ok) {
                setTasks(data);
            } else {
                throw new Error(data.error || 'Failed to fetch tasks');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container>
            {/* <Quote/> */}
            <Button onClick={handleShow} style={{ margin: '1rem 0' }}>
                Create Task
            </Button>
            <CreateTaskModal show={showModal} handleClose={handleClose} refetchTasks={refetchTasks} />
            {loading && <Spinner animation="border" />}
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
                <Col>
                    <Table bordered striped style={{ marginTop: '1rem' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '70%' }}>Task Title</th>
                                <th style={{ width: '20%' }}>Status</th>
                                <th style={{ textAlign: 'center' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task._id}>
                                    <td>{task.title}</td>
                                    <td style={{ color: task.status === 'Completed' ? 'green' : 'red' }}>
                                        {task.status}
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        <Button variant="primary" href={`/task/${task._id}`}>
                                            View Details
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
