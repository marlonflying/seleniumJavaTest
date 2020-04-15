package stepDefinitions;

import com.sun.org.apache.bcel.internal.generic.NEW;
import io.cucumber.java.en.*;
import jdk.internal.org.objectweb.asm.tree.TryCatchBlockNode;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObjects.AddUserPage;
import pageObjects.LoginPage;

import java.util.concurrent.TimeUnit;

public class Steps extends BaseClass{

    @Given("User Launch Chrome browser")
    public void user_Launch_Chrome_browser() {
        System.setProperty("webdrver.chrome.driver", "/usr/bin/chromedriver");
        driver=new ChromeDriver();
        driver.manage().window().maximize();
        lp= new LoginPage(driver);
    }

    @When("User opens URL {string}")
    public void user_opens_URL(String url) {
        driver.get(url);
    }

    @When("User enters Email as {string} and Password as {string}")
    public void user_enters_Email_as_and_Password_as(String email, String password) {
        lp.setUserName(email);
        lp.setPassword(password);
    }

    @When("Click on Log In")
    public void click_on_Log_In() {
        lp.clickLogin();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    @Then("Page Title should be {string}")
    public void page_Title_should_be(String title) {

        if (driver.getTitle().equals(title)) {
            Assert.assertEquals(title, driver.getTitle());
        } else {
            driver.close();
            Assert.assertTrue(false);
        }

    }

    @When("User click on Log Out")
    public void user_click_on_Log_Out() {
        lp.clickLogout();

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Then("close browser")
    public void close_browser() {
        driver.quit();
    }

    //User Step Definitions

    @When("User click on New User")
    public void user_click_on_New_User() {
        userP = new AddUserPage(driver);
        userP.clickOnUserMenu();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @When("User enter info")
    public void user_enter_info() {
        userP.setUserName(randomstrig());
        userP.setEmail(randomstrig() + "@gmail.com");
        userP.clickShowPass();
        userP.setPassword(randomstrig());
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @When("clcik on Add User")
    public void clcik_on_Add_User() {
        userP.clickUserNotification();
        userP.clickAddUser();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Then("User can view confirmation message {string}")
    public void user_can_view_confirmation_message(String string) {
        Assert.assertFalse(!driver.getPageSource().contains("New user created."));
    }

}
