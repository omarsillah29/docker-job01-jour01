<?php
$dataDir = __DIR__ . '/data';
$file = $dataDir . '/results.json';

if (!is_dir($dataDir)) {
    mkdir($dataDir, 0777, true);
}

// Lire les données envoyées
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    // Charger les résultats existants
    $results = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $results[] = $data;

    // Sauvegarder les résultats
    file_put_contents($file, json_encode($results, JSON_PRETTY_PRINT));
    echo json_encode(["status" => "success"]);
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Données invalides"]);
}
