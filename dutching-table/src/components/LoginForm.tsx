import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

interface LoginFormProps {
  onLogin: (email: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email); // This logs the user in
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      maxWidth={300}
      mx="auto"
      mt={8}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Typography variant="h6">Login to View Dutch Table</Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">Login</Button>
    </Box>
  );
}
