import React from 'react';
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
            <Card.Title>&nbsp;Nome</Card.Title><Card.Text>&nbsp;{userProfile.name}</Card.Text>
            <Card.Title>&nbsp;E-mail</Card.Title><Card.Text>&nbsp;{userProfile.email}</Card.Text>
          </Card.Body>
        </Card>  
      ) : (
        <p>Usuário ainda não fez login.</p>
      )}
    </div>
  );
};

export default UserProfile;