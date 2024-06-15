import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, Button, Spinner, Alert, Modal, Form } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa'; // Import FaArrowLeft icon


const TaskPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editFormData, setEditFormData] = useState({ title: '', description: '' });

    useEffect(() => {
        const fetchTask = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/tasks/${id}`);
                const data = await res.json();
                if (res.ok) {
                    setTask(data);
                    setEditFormData({ title: data.title, description: data.description });
                } else {
                    throw new Error(data.error || 'Failed to fetch task');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [id]);

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`/api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editFormData)
            });
            const data = await res.json();
            if (res.ok) {
                setTask(data);
                setShowEditModal(false);
            } else {
                throw new Error(data.error || 'Failed to update task');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/tasks/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                navigate('/');
            } else {
                const data = await res.json();
                throw new Error(data.error || 'Failed to delete task');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteClick = () => {
        const confirmBox = window.confirm(
            "Do you really want to delete this task?"
        );
        if (confirmBox === true) {
            handleDelete();
        }
    };

    const toggleTaskStatus = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/tasks/${id}/togglestatus`, {
                method: 'PUT'
            });
            const data = await res.json();
            if (res.ok) {
                setTask(data); // Update the task with the toggled status
            } else {
                throw new Error(data.error || 'Failed to toggle task status');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => setShowEditModal(false);

    if (loading) {
        return <Spinner animation="border" />;
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    if (!task) {
        return <Alert variant="warning">Task not found</Alert>;
    }

    return (
        <>
            <Card style={{ margin: '1rem' }}>
            <Card.Header>
                <Link to={`/`}>
                    <FaArrowLeft /> Go Back
                </Link>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Title : {task.title}</Card.Title>
                    <Card.Text>Description : {task.description}</Card.Text>
                    <Card.Text>Status : {task.status}</Card.Text>
                    <Button variant="primary" onClick={() => setShowEditModal(true)}>Edit</Button>
                    <Button variant="danger" onClick={handleDeleteClick} style={{ marginLeft: '1rem' }}>Delete</Button>
                    <Button variant="info" onClick={toggleTaskStatus} style={{ marginLeft: '1rem' }}>
                        {task.status === 'Completed' ? 'Mark as Pending' : 'Mark as Completed'}
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={showEditModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEditSubmit}>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={editFormData.title}
                                onChange={handleEditChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription" className="mt-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                rows={3}
                                value={editFormData.description}
                                onChange={handleEditChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default TaskPage;
