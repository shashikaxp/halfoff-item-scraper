import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { styled, useTheme } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import auth from "../../api/auth/auth";

import schema from "./Login.yup";
import { STORAGE } from "../../constants/storage";

export default function Login() {
  const theme = useTheme();
  const history = useHistory();
  const { plain, primary, secondary } = theme.palette.background;

  const MainContainerWrapper = styled("div")({
    background: `linear-gradient(135deg, ${primary} 31%, ${secondary} 100%)`,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  });

  const ContainerWrapper = styled(Grid)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  });

  const FormWrapper = styled(Grid)({
    background: `${plain}`,
    padding: "30px 50px 40px 50px",
    borderRadius: "5px",
    textAlign: "center"
  });

  const Input = styled(TextField)({
    margin: "10px 0px 10px 0"
  });

  const ButtonWrapper = styled(Grid)({
    marginTop: "35px"
  });

  const AppName = styled(Grid)({
    fontFamily: "Montserrat",
    fontSize: "30px",
    fontWeight: "600",
    color: "white",
    marginBottom: "25px"
  });

  const FormTitle = styled(Grid)({
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "32px",
    fontWeight: "400",
    color: `${theme.palette.primary.main}`
  });

  const handleLogin = async values => {
    try {
      const result = await auth.login(values);
      if (result) {
        localStorage.setItem(STORAGE.TOKEN, result.token);
        history.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContainerWrapper>
      <Container>
        <ContainerWrapper container alignItems="center">
          <Grid item sm={5} xs={12}>
            <AppName item align="center">
              Half-Off Item Scraper
            </AppName>
            <FormWrapper>
              <FormTitle align="center">Login</FormTitle>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={schema}
                onSubmit={handleLogin}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Grid item>
                      <Field
                        name="email"
                        type="input"
                        as={Input}
                        label="Email"
                        fullWidth
                        error={errors.email && touched.email}
                        helperText={errors.email}
                      />
                    </Grid>
                    <Grid item>
                      <Field
                        name="password"
                        type="password"
                        as={Input}
                        label="Password"
                        fullWidth
                        error={errors.password && touched.password}
                        helperText={errors.password}
                      />
                    </Grid>
                    <ButtonWrapper container justify="flex-end">
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        type="submit"
                      >
                        Login
                      </Button>
                    </ButtonWrapper>
                  </Form>
                )}
              </Formik>
            </FormWrapper>
          </Grid>
        </ContainerWrapper>
      </Container>
    </MainContainerWrapper>
  );
}
