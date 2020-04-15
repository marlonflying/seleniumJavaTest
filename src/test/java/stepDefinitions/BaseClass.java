package stepDefinitions;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import pageObjects.AddUserPage;
import pageObjects.LoginPage;

import java.util.Random;

public class BaseClass {
    public WebDriver driver;
    public LoginPage lp;
    public AddUserPage userP;

    public static String randomstrig() {
        String generatedString = RandomStringUtils.randomAlphanumeric(11);
        return  generatedString;
    }
}
