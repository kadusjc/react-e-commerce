import React from 'react';
import moment from 'moment'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const userProfile = useSelector((state) => state.user.user);

  return (
    <div>
      <h2>Perfil do Usuário Logado</h2>
      {userProfile && userProfile.name ? (
        <Card>
          <Card.Body>
            <Card.Title>Nome</Card.Title><Card.Text>{userProfile.name}</Card.Text>
            <Card.Title>E-mail</Card.Title><Card.Text>{userProfile.email}</Card.Text>
          </Card.Body>
        </Card>  
      ) : (
        <p>Usuário ainda não fez login.</p>
      )}
    </div>
  );
};

export default UserProfile;