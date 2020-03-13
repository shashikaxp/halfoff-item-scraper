import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { styled, useTheme } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import auth from "../../api/auth/auth";

import schema from "./Register.yup";

export default function Register() {
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
    color: `${theme.palette.primary.main}`,
    marginBottom: "20px"
  });

  const handleRegister = async values => {
    try {
      const result = await auth.register(values);
      if (result) {
        history.push("/home");
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
              <FormTitle align="center">Register</FormTitle>
              <Formik
                initialValues={{
                  email: "",
                  firstName: "",
                  lastName: "",
                  password: "",
                  confirmPassword: ""
                }}
                validationSchema={schema}
                onSubmit={handleRegister}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Grid container item xs={12} sm={12} spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          name="firstName"
                          type="input"
                          as={Input}
                          label="First Name"
                          fullWidth
                          error={errors.firstName && touched.firstName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          name="lastName"
                          type="input"
                          as={Input}
                          label="Last Name"
                          fullWidth
                          error={errors.lastName && touched.lastName}
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={12} spacing={2}>
                      <Grid item xs={12}>
                        <Field
                          name="email"
                          type="input"
                          as={Input}
                          label="Email"
                          fullWidth
                          error={errors.email && touched.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          name="password"
                          type="password"
                          as={Input}
                          label="Password"
                          fullWidth
                          error={errors.password && touched.password}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          name="confirmPassword"
                          type="password"
                          as={Input}
                          label="Confirm Password"
                          fullWidth
                          error={
                            errors.confirmPassword && touched.confirmPassword
                          }
                        />
                      </Grid>
                    </Grid>
                    <ButtonWrapper container justify="flex-end">
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        type="submit"
                      >
                        Register
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
