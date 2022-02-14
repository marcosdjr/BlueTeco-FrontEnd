import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import { UserArea } from "../../components/UserArea";

export const User = () => {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
      setShowError(true);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.get('/auth', config).then((response) => {
      setLogged(true);
      setUser(response.data);
    });
  }, [logged]);

  return (
    <UserArea>
      {logged && (
        <>
          <h2>{user.firstName}</h2>
          <h3>{user.birthDate}</h3>
          <h3>{user.role}</h3>
          <span>{user.email}</span>
        </>
      )}
      {showError && (
        <Alert variant="danger">
          <Alert.Heading>Faça login!</Alert.Heading>
        </Alert>
      )}
    </UserArea>
  );
};
