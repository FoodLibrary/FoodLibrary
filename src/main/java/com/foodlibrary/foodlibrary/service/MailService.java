package com.foodlibrary.foodlibrary.service;

import com.foodlibrary.foodlibrary.entity.Mail;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MailService {
    private JavaMailSender mailSender;
    private static final String FROM_ADDRESS="rhtjrwnszyzy@gmail.com";

    public void mailSend(Mail mail){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mail.getAddress());
        message.setFrom(MailService.FROM_ADDRESS);
        message.setSubject(mail.getTitle());
        message.setSubject(mail.getTitle());
        message.setText(mail.getMessage());

        mailSender.send(message);
    }
}
