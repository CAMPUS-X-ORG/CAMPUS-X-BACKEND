import express from "express";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import { authenticateToken } from "./middlewares/authMiddleware";
import confeedRoutes from "./routes/confeedRoutes";

const app = express();
app.use(express.json());
app.use("/user", authenticateToken, userRoutes);
app.use("/confeed", authenticateToken, confeedRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send('Hello "updated" world!');
});

app.get("/codes", (req, res) => {
  const code = `
  Q1. Inverse of a Matrix

  #include <iostream>
  #include <vector>
  
  // Function to calculate the determinant of a 2x2 matrix
  double determinant2x2(std::vector<std::vector<double>>& matrix) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }
  
  // Function to calculate the cofactor matrix of a square matrix
  void cofactor(std::vector<std::vector<double>>& matrix, std::vector<std::vector<double>>& cofactorMatrix) {
      int size = matrix.size();
      for (int i = 0; i < size; i++) {
          for (int j = 0; j < size; j++) {
              // Get the minor matrix (matrix without row i and column j)
              std::vector<std::vector<double>> minor(size - 1, std::vector<double>(size - 1, 0.0));
              int minorI = 0, minorJ = 0;
              for (int row = 0; row < size; row++) {
                  for (int col = 0; col < size; col++) {
                      if (row != i && col != j) {
                          minor[minorI][minorJ] = matrix[row][col];
                          minorJ++;
                          if (minorJ == size - 1) {
                              minorJ = 0;
                              minorI++;
                          }
                      }
                  }
              }
              // Calculate the cofactor and store it in the cofactor matrix
              int sign = ((i + j) % 2 == 0) ? 1 : -1;
              cofactorMatrix[i][j] = sign * determinant2x2(minor);.
          }
      }
  }
  
  // Function to calculate the transpose of a matrix
  void transpose(std::vector<std::vector<double>>& matrix, std::vector<std::vector<double>>& transposeMatrix) {
      int numRows = matrix.size();
      int numCols = matrix[0].size();
      for (int i = 0; i < numRows; i++) {
          for (int j = 0; j < numCols; j++) {
              transposeMatrix[j][i] = matrix[i][j];
          }
      }
  }
  
  // Function to calculate the inverse of a square matrix
  bool inverse(std::vector<std::vector<double>>& matrix, std::vector<std::vector<double>>& inverseMatrix) {
      int size = matrix.size();
      std::vector<std::vector<double>> cofactorMatrix(size, std::vector<double>(size, 0.0));
      std::vector<std::vector<double>> adjointMatrix(size, std::vector<double>(size, 0.0));
      double det = determinant2x2(matrix);
  
      if (size != matrix[0].size() || det == 0) {
          return false;  // The matrix is not square or is singular (non-invertible)
      }
             inverseMatrix[i][j] = adjointMatrix[i][j] / det;
          }
      }
  
      return true;
  }
  
  int main() {
      std::vector<std::vector<double>> matrix = {{1, 2, 3},
                                                  {4, 5, 6},
                                                  {7, 8, 9}};
  
      int size = matrix.size();
      std::vector<std::vector<double>> inverseMatrix(size, std::vector<double>(size, 0.0));
  
      if (inverse(matrix, inverseMatrix)) {
          std::cout << "Original Matrix:\n";
          for (int i = 0; i < size; i++) {
              for (int j = 0; j < size; j++) {
  
      cofactor(matrix, cofactorMatrix);
      transpose(cofactorMatrix, adjointMatrix);
  
      for (int i = 0; i < size; i++) {
          for (int j = 0; j < size; j++) {
                   std::cout << matrix[i][j] << " ";
              }
              std::cout << "\n";
          }
  
          std::cout << "\nInverse Matrix:\n";
          for (int i = 0; i < size; i++) {
              for (int j = 0; j < size; j++) {
                  std::cout << inverseMatrix[i][j] << " ";
              }
              std::cout << "\n";
          }
      } else {
          std::cout << "Matrix is singular (not invertible).\n";
      }
  
      return 0;
  }
  `;
  res.send(code);
});

app.listen(3000, () => {
  console.log("Server ready at localhost:3000");
});
