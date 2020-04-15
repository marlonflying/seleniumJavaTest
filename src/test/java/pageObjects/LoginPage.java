package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public WebDriver ldriver;

    public LoginPage(WebDriver rdriver) {
        ldriver=rdriver;
        PageFactory.initElements(rdriver,this);
    }

    @FindBy(id = "user_login")
    @CacheLookup
    WebElement txtEmail;

    @FindBy(id = "user_pass")
    @CacheLookup
    WebElement txtPassword;

    @FindBy(xpath = "//*[@id=\"wp-submit\"]")
    @CacheLookup
    WebElement btnLogin;

    @FindBy(xpath = "//*[@id=\"wp-admin-bar-my-account\"]")
    @CacheLookup
    WebElement menuUser;

    @FindBy(xpath = "//*[@id=\"wp-admin-bar-logout\"]")
    @CacheLookup
    WebElement lnkLogout;

    public void  setUserName(String uname) {
        txtEmail.clear();
        txtEmail.sendKeys(uname);
    }

    public void setPassword(String pwd) {
        txtPassword.clear();
        txtPassword.sendKeys(pwd);
    }

    public void clickLogin() {
        btnLogin.click();
    }

    public void clickLogout() {
        mouseOver(menuUser);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        lnkLogout.click();
    }

    void mouseOver(WebElement targetElement) {
        Actions act = new Actions(ldriver);
        act.moveToElement(targetElement).perform();
    }

}
