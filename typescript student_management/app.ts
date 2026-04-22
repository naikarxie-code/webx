class Student {
  // Public: can be accessed from anywhere
  public name: string;

  // Protected: accessible only inside this class and child class
  protected rollNo: number;

  // Private: accessible only inside this class
  private marks: number[];

  constructor(name: string, rollNo: number, marks: number[]) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }

  // Private marks can only be used through this method
  public calculateAverage(): number {
    let total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }
}

class Result extends Student {
  constructor(name: string, rollNo: number, marks: number[]) {
    super(name, rollNo, marks);
  }

  public getResultHTML(): string {
    const avg = this.calculateAverage();

    let grade = "C";
    let gradeClass = "grade-c";

    if (avg >= 75) {
      grade = "A";
      gradeClass = "grade-a";
    } else if (avg >= 50) {
      grade = "B";
      gradeClass = "grade-b";
    }

    // Showing protected access inside child class
    console.log("Protected rollNo inside child class:", this.rollNo);

    return `
      <div class="student-card">
        <h3>${this.name}</h3>
        <p><strong>Roll Number:</strong> ${this.rollNo}</p>
        <p><strong>Average Marks:</strong> ${avg.toFixed(2)}</p>
        <p><strong>Grade:</strong> <span class="${gradeClass}">${grade}</span></p>

        <div class="demo-box">
          <h4>Access Modifier Demonstration</h4>
          <p>✔ Public: <b>name</b> can be accessed anywhere → ${this.name}</p>
          <p>✔ Protected: <b>rollNo</b> can be accessed in child class → ${this.rollNo}</p>
          <p>✔ Private: <b>marks</b> cannot be accessed directly outside Student class</p>
          <p>Open browser console to see proof.</p>
        </div>
      </div>
    `;
  }
}

function addStudent(): void {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const rollInput = document.getElementById("roll") as HTMLInputElement;
  const marksInput = document.getElementById("marks") as HTMLInputElement;
  const resultDiv = document.getElementById("result") as HTMLDivElement;

  const name = nameInput.value.trim();
  const rollNo = Number(rollInput.value);
  const marks = marksInput.value
    .split(",")
    .map(mark => Number(mark.trim()));

  if (!name || !rollNo || marks.some(isNaN)) {
    alert("Please enter valid student details.");
    return;
  }

  const student = new Result(name, rollNo, marks);

  // PUBLIC works
  console.log("Public name accessed outside class:", student.name);

  // Uncomment these lines one by one to show errors in TypeScript:
  // console.log(student.rollNo); // Error: protected
  // console.log(student.marks);  // Error: private

  resultDiv.innerHTML += student.getResultHTML();

  // Clear fields
  nameInput.value = "";
  rollInput.value = "";
  marksInput.value = "";
}