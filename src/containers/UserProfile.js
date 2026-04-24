import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const userProfile = useSelector((state) => state.user.user);

  return (
    <div className="profile-wrapper">
      <h2 className="page-title" style={{textAlign: 'center', display: 'block', margin: '0 auto 28px'}}>Minha Conta</h2>
      {userProfile && userProfile.name ? (
        <Card className="profile-card">
          <Card.Body>
            <div className="profile-avatar">
              {userProfile.name.charAt(0).toUpperCase()}
            </div>
            <Card.Title>Nome</Card.Title><Card.Text>{userProfile.name}</Card.Text>
            <Card.Title>E-mail</Card.Title><Card.Text>{userProfile.email}</Card.Text>
          </Card.Body>
        </Card>  
      ) : (
        <p className="profile-no-login">Faça login para ver seu perfil.</p>
      )}
    </div>
  );
};

export default UserProfile;