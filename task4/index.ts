interface Query {
  type: "1" | "2";
  range: [number, number];
}

interface InputData {
  token: string;
  data: number[];
  query: Query[];
}

const task4 = (arr: InputData): number[] => {
  let arr1: number[] = [];
  let arr2: number[] = [];

  for (let i = 0; i < arr.data.length; i++) {
    if (i > 0) {
      arr1[i] = arr1[i - 1] + arr.data[i];
      arr2[i] =
        i % 2 === 0 ? arr1[i - 1] + arr.data[i] : arr1[i - 1] - arr.data[i];
    } else {
      arr1[i] = arr.data[i];
      arr2[i] = arr.data[i];
    }
  }

  let res: number[] = [];
  for (const q of arr.query) {
    if (q.type === "1") {
      let sum = arr1[q.range[1]] - arr1[q.range[0]] + arr.data[q.range[0]];
      res.push(sum);
    } else {
      let sum = arr2[q.range[1]] - arr2[q.range[0]];
      if (q.range[0] % 2 === 0) {
        sum += arr.data[q.range[0]];
      } else {
        sum -= arr.data[q.range[0]];
      }
      res.push(sum);
    }
  }
  return res;
};

const getData = async () => {
  try {
    const inputResponse = await fetch(
      "https://test-share.shub.edu.vn/api/intern-test/input"
    );
    const inputData: InputData = await inputResponse.json();
    const result = task4(inputData);
    const outputResponse = await fetch(
      "https://test-share.shub.edu.vn/api/intern-test/output",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${inputData.token}`,
        },
        body: JSON.stringify(result),
      }
    );

    const outputData = await outputResponse.json();
    console.log("Response from output API:", outputData);
  } catch (error) {
    console.error("Error:", error);
  }
};

getData();
