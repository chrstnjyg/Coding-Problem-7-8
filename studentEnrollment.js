let DSA = [];
let PL = [];
let Networks = [];

function main() {
    while (true) {
        let subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit");
        
        let subject;
        if (subjectChoice === "A") {
            subject = DSA;
            alert("You selected DSA.");
        } else if (subjectChoice === "B") {
            subject = PL;
            alert("You selected PL.");
        } else if (subjectChoice === "C") {
            subject = Networks;
            alert("You selected Networks.");
        } else if (subjectChoice === "D") {
            console.log("Enrolled students per subject:");
            console.log("DSA:", DSA);
            console.log("PL:", PL);
            console.log("Networks:", Networks);
            alert("Exiting program. Check console for enrolled students.");
            break;
        } else {
            alert("Invalid choice. Please try again.");
            continue;
        }

        while (true) {
            let operation = prompt("Choose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");

            if (operation === "A") {
                let studentName = prompt("Enter the name of the student to enroll:");
                subject.push(studentName);
                alert(`${studentName} has been enrolled.`);
            } 
            else if (operation === "B") {
                if (subject.length === 0) {
                    alert("No students are currently enrolled in this subject.");
                } else {
                    alert("Currently enrolled students:\n" + subject.join(", "));
                    let studentName = prompt("Enter the name of the student to unenroll:");
                    let index = subject.indexOf(studentName);
                    if (index !== -1) {
                        subject.splice(index, 1);
                        alert(`${studentName} has been unenrolled.`);
                    } else {
                        alert(`${studentName} is not enrolled in this subject.`);
                    }
                }
            } 
            else if (operation === "C") {
                break;
            } 
            else if (operation === "D") {
                console.log("Enrolled students per subject:");
                console.log("DSA:", DSA);
                console.log("PL:", PL);
                console.log("Networks:", Networks);
                alert("Exiting program. Check console for enrolled students.");
                return;
            } 
            else {
                alert("Invalid operation. Please try again.");
            }
        }
    }
}
main();
