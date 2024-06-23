body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    color: #343a40;
    text-align: center;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

button, .import-button {
    padding: 10px 20px;
    margin: 10px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover, .import-button:hover {
    background-color: #0056b3;
}

.classroom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 15px;
    margin-top: 20px;
}

.seat {
    width: 80px;
    height: 80px;
    background-color: #6c757d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.2s;
}

.seat:hover {
    transform: scale(1.1);
}

.seat.occupied {
    background-color: #28a745;
}

.info, .finance {
    margin-top: 20px;
    padding: 15px;
    background-color: #f1f3f5;
    border-radius: 10px;
}

.info p, .finance p {
    margin-bottom: 10px;
    color: #343a40;
}

.finance canvas {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
}

.input-file {
    display: none;
}

label.import-button {
    padding: 10px 20px;
    margin: 10px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: inline-block;
}

label.import-button:hover {
    background-color: #0056b3;
}
