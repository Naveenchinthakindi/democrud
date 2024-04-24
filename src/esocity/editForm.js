import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { createPropertyUnit, fetchSinglePropertiesUnit, updatePropertyUnit } from 'src/redux/slices/propertyUnitSlice';
// import { validateUnitName } from 'src/utils/validationHelpers';
// import { RootState } from 'src/redux/reducers/reducers';
// import { singleProperytUnitSuccess } from 'src/redux/slices/propertyUnitSlice';
// import { fetchBlocks } from 'src/redux/slices/blockSlice';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { RootState } from "../app/store";
// import { fetchUsers } from 'src/redux/slices/userSlice';

const Index = () => {
  const [values, setValues] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log("values are ", values);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "650px",
        marginTop: "10px",
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={4}>
          <Card>
            <Divider />
            <CardContent className="containerForm">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100%" },
                }}
                noValidate
              >
                <div>
                  <TextField
                    required
                    label="Units Name"
                    type="text"
                    name="units_name"
                    onChange={handleInputChange}
                  />

                  <TextField
                    required
                    label="Block ID"
                    type="text"
                    name="blockId"
                    // value={singledata.blockId}
                    onChange={handleInputChange}
                    // select={isEditing}
                  />

                  <TextField
                    required
                    label="User ID"
                    type="text"
                    name="userId"
                    // value={singledata.userId}
                    onChange={handleInputChange}
                  />
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleFormSubmit}
                      style={{ width: "100%", marginTop: "20px" }}
                    >
                      {"Update Property Unit"}
                    </Button>
                  </div>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
