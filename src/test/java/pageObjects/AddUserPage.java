package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

public class AddUserPage {
    public WebDriver ldriver;

    public AddUserPage(WebDriver rdriver) {
        ldriver=rdriver;
        PageFactory.initElements(rdriver,this);
    }

    By userName=By.id("user_login");
    By email=By.id("email");
    By passBtn=By.xpath("//*[@id=\"createuser\"]/table/tbody/tr[6]/td/button");
    By password=By.id("pass1");
    By sendMail=By.xpath("//*[@id=\"send_user_notification\"]");
    By addUserBtn=By.xpath("//*[@id=\"createusersub\"]");
    By menuUser=By.xpath("//*[@id=\"menu-users\"]/a/div[2]");
    By lnkAddUser=By.xpath("//*[@id=\"menu-users\"]/ul/li[3]/a");

    public String getPageTitle() {
        return ldriver.getTitle();
    }

    public void clickOnUserMenu() {
        mouseOver(ldriver.findElement(menuUser));
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        ldriver.findElement(lnkAddUser).click();
    }

    void mouseOver(WebElement targetElement) {
        Actions act = new Actions(ldriver);
        act.moveToElement(targetElement).perform();
    }

    public void clickShowPass() {
        ldriver.findElement(passBtn).click();
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void clickUserNotification() {
        ldriver.findElement(sendMail).click();
    }

    public void clickAddUser() {
        ldriver.findElement(addUserBtn).click();
    }

    public void  setUserName(String uname) {
        ldriver.findElement(userName).sendKeys(uname);

    }

    public void  setEmail(String mail) {
        ldriver.findElement(email).sendKeys(mail);
    }

    public void setPassword(String pwd) {
        ldriver.findElement(password).clear();
        ldriver.findElement(password).sendKeys(pwd);
    }


}
