import { Box, Button, Container, Divider, Link, TextField, Typography} from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../firebase"; // Import Firebase config
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successfully");
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login Failed! Please check your credentials.");
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user);
      alert(`Welcome ${user.displayName}`);
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <Box marginY={5}>
      <Container maxWidth="sm">
        <Box marginY={2} component={"form"} noValidate>
          <Typography variant="h4" textAlign={"center"}>
            Sign In
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            You're Just 1 Step Away
          </Typography>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 2, mb: 2 }}
            type="submit"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            fullWidth
            size="large"
            sx={{ mt: 1 }}
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </Button>
        </Box>
        <Divider />
        <Box marginY={2}>
          <Typography variant="body2">
            Don't Have an Account?{" "}
            <Link component={RouterLink} to={"/register"}>
              Click here to Register
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
