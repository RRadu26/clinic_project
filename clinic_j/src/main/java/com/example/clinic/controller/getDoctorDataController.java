package com.example.clinic.controller;

import com.example.clinic.dto.*;
import com.example.clinic.model.*;
import com.example.clinic.security.JWTGenerator;
import com.example.clinic.service.DoctorDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/doctordata")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class getDoctorDataController {
    @Autowired
    DoctorDataService doctorDataService;
    @Autowired
    private JWTGenerator jwtGenerator;
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Doctor')"))
    @PostMapping("/getpatients")
    public ResponseEntity getPatientList(@RequestBody getPatientsDTO getPatientsDTO, @RequestHeader("Authorization") String auth)  {
        String token = auth.substring(auth.indexOf("Bearer") + 7, auth.length());
        String email = jwtGenerator.getUsernameFromJWT(token);
        return new ResponseEntity<>(doctorDataService.getMyPatients(email, getPatientsDTO.getName()), HttpStatus.OK);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Doctor')"))
    @PostMapping("/getpatientbyid")
    public ResponseEntity getPatientById(@RequestBody getPatientDTO getPatientDTO)  {
        return new ResponseEntity<>(doctorDataService.getPatientById(getPatientDTO.getId()), HttpStatus.OK);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Doctor')"))
    @PostMapping("/getpatientconsultation")
    public ResponseEntity getPatientConsultations(@RequestBody getPatientDTO getPatientDTO) {
        return new ResponseEntity<>(doctorDataService.getPatientConsultations(getPatientDTO.getId()), HttpStatus.OK);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Doctor')"))
    @PostMapping("/getpatientfoodprogram")
    public ResponseEntity getPatientFoodPrograms(@RequestBody getPatientDTO getPatientDTO) {
        return new ResponseEntity<>(doctorDataService.getPatientFoodPrograms(getPatientDTO.getId()), HttpStatus.OK);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("permitAll()"))
    @PostMapping("/getpatientreceipts")
    public ResponseEntity getPatientReceipts(@RequestBody getPatientDTO getPatientDTO) {
        return new ResponseEntity<>(doctorDataService.getPatientReceipts(getPatientDTO.getId()), HttpStatus.OK);

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Doctor')"))
    @PostMapping("/addconsultation")
    public ResponseEntity addConsultation(@RequestBody PostConsultationDTO postConsultationDTO) {
        try {
            Consultation consultation = new Consultation();

            consultation.setC_data(postConsultationDTO.getC_data());
            consultation.setDate(postConsultationDTO.getDate());
            consultation.setDiagnosis(postConsultationDTO.getDiagnosis());
            consultation.setName(postConsultationDTO.getName());
            consultation.setDoc_id(postConsultationDTO.getDoc_id());
            consultation.setPatient_id(postConsultationDTO.getPatient_id());

            doctorDataService.saveConsultation(consultation);
        } catch (RuntimeException e) {
                return new ResponseEntity<>("Bad Consultation", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Saved", HttpStatus.OK);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Doctor')"))
    @PostMapping("/addfoodprogram")
    public ResponseEntity addFoodProgram(@RequestBody PostFoodProgramDTO postFoodProgramDTO) {
        try {
            FoodProgram foodProgram = new FoodProgram();
            foodProgram.setData(postFoodProgramDTO.getData());
            foodProgram.setDate(postFoodProgramDTO.getDate());
            foodProgram.setName(postFoodProgramDTO.getName());
            foodProgram.setD_code(postFoodProgramDTO.getD_code());
            foodProgram.setP_code(postFoodProgramDTO.getP_code());

            doctorDataService.saveFoodProgram(foodProgram);
        } catch(RuntimeException e) {
            return new ResponseEntity<>("Bad Food Program", HttpStatus.BAD_REQUEST);

        }
        return new ResponseEntity<>("Saved", HttpStatus.OK);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize(("hasAuthority('Doctor')"))
    @PostMapping("/savemedication")
    public ResponseEntity addMedication(@RequestBody POSTReceiptDTO postReceiptDTO) {
        try {
            Receipt receipt = new Receipt();
            receipt.setName(postReceiptDTO.getName());
            receipt.setDate(postReceiptDTO.getDate());
            receipt.setD_code(postReceiptDTO.getD_code());
            receipt.setP_code(postReceiptDTO.getP_code());
            receipt.setObservations(postReceiptDTO.getObservations());

            doctorDataService.saveReceipt(receipt);
            int id_receipt =receipt.getId();
            for(int i = 0; i < postReceiptDTO.getDrugs().size(); i++) {
                Drugs drugs = new Drugs();
                drugs.setName(postReceiptDTO.getDrugs().get(i).getName());
                drugs.setSpecifications(postReceiptDTO.getDrugs().get(i).getSpecifications());
                drugs.setId_receipt(id_receipt);
                doctorDataService.saveDrugs(drugs);
            }
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Bad Medication", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Saved", HttpStatus.OK);

    }

}

