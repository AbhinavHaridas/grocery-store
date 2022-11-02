import React from 'react';
import "../Styles/Terms.css"

const Terms = () =>{
    return(
      <body>
       <><div><h1 class="tandc">TERMS AND CONDITIONS</h1></div>
       <br></br>
       <br></br>
         <div class="row">
         <div class="col-sm-3" id="spy">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item"><a class="nav-link" href="#scroll1">USER TERMS</a></li><br />
            <li class="nav-item"><a class="nav-link" href="#scroll2">PAYMENT TERMS</a></li><br />
            <li class="nav-item"><a class="nav-link" href="#scroll3">CANCELLATION AND REFUND</a></li><br />
            <li class="nav-item"><a class="nav-link" href="#scroll4">VIOLATION OF TERMS OF USE</a></li><br /><br />
          </ul>
        </div>
        <div class="col-sm-9 scrollspy-example" data-spy="scroll" data-target="#spy">
          <div id="scroll1">
            <h2>USER TERMS</h2>
            <p>
            These terms of use ("Terms of Use") mandate the terms on which users or visitors (the “Users”) accessing the platform.Users are requested to carefully read the Terms of Use before using the Platform or registering on the Platform or accessing any material or information through the Platform. Through the continued use of the Platform, or accepting these Terms of Use at the time of creating an Account, Users accept these Terms of Use and agree to be legally bound by the same.Use of and access to the Platform is offered to Users upon the condition of acceptance of all the terms, conditions and notices contained in these Terms of Use and Privacy Policy, along with any amendments.
            </p>
          </div>
          <br></br>
          <div id="scroll2">
            <h2>PAYMENT TERMS</h2>
            <p>
            Users shall pay such amount indicated on the Platform with respect to the app's Services availed. Users may be charged a separate service fee (“Service Fees”). The Service Fees shall be paid prior to availing any of the respective app's Services.Users agree that app may use certain third-party vendors and service providers, including payment gateways, to process the payments made by Users on the Platform.Where enabled by the respective Merchant, Users may pay for the respective app Services through ‘Cash on Delivery’. Users understand and acknowledge that Delivery Partners may not have exact change during the time of payment, and as such, it shall be the Users responsibility to ensure that they provide the exact amount for the app's Services as indicated on the Platform.
            </p>
          </div>
          <br></br>
          <div id="scroll3">
            <h2>CANCELLATION AND REFUND</h2>
            <p>
             app shall confirm and initiate the execution of the transaction initiated by Users upon receiving confirmation from Users for the same. If Users wish to cancel a transaction on the Platform, they shall select the cancel option on the Platform. It is to be noted that Users may have to pay a cancellation fee for transactions initiated on the Platform for which work has already been commenced by the Delivery Partner or the Merchant, as the case may be. With respect to work commenced by Merchants the cancellation fee will be charged to such Users which will be in accordance with the cancellation and refund policies of such Merchants.app may cancel transactions initiated by Users on the Platform, on the instructions of the Merchants/Delivery Partners, if :</p>
             
             <li>The designated address provided by Users is outside the service zone of the Merchant/Delivery Partner.</li>
             <li>There is no User response via phone or any other communication channel at the time of confirmation of the order booking.</li>
             <li>The transaction involves supply/delivery/purchase of any material good that is illegal, offensive or violative of the Terms of Use.</li>
             <li>The User is not physically present or is unreachable once the Delivery Partner reaches the designated delivery location, for a period in excess of fifteen (15) minutes.</li>
             <li>Information, instructions and authorisations provided by Users are not complete or sufficient to execute the transaction.</li>
             <li>If any Merchant’s outlet is closed.</li>
             <li>If a Delivery Partner is not available to perform the services.</li>
             <li>If any Item or product is not in stock with the Merchant.</li>
             <li>If the transaction cannot be completed for reasons not in control of app.</li>
          </div>
          <br></br>
          <div id="scroll4">
            <h2>VIOLATION OF TERMS OF USE</h2>
            <p>
            Users agree that any violation by Users of these Terms of Use will constitute an unlawful and unfair business practice, and will cause irreparable harm to app, as the case may be, for which monetary damages would be inadequate, and Users consent to the app obtaining any injunctive or equitable relief that they deem necessary or appropriate in such circumstances. These remedies are in addition to any other remedies that the app may have at law or in equity. If app takes any legal action against Users as a result of their violation of these Terms of Use, app is entitled to recover from Users , and Users agree to pay all reasonable attorneys’ fees and costs of such action, in addition to any other relief that may be granted.</p>
          </div>
          <br></br>
        </div>
       </div></>
      </body>
    )
}

export default Terms;