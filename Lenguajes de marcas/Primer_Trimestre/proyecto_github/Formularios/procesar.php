<?php
// Archivo genérico para las prácticas de formularios HTML.
$metodo = $_SERVER['REQUEST_METHOD'];
$datos = $metodo === 'POST' ? $_POST : $_GET;

function mostrarValor($valor) {
    if (is_array($valor)) {
        return implode(', ', array_map('mostrarValor', $valor));
    }
    return htmlspecialchars((string)$valor, ENT_QUOTES, 'UTF-8');
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos recibidos</title>
    <link rel="stylesheet" href="estilos_formularios.css">
</head>
<body class="pagina-respuesta">
    <main class="respuesta">
        <div class="icono-respuesta">✓</div>
        <h1>Datos recibidos</h1>
        <p class="subtitulo">
            El formulario ha sido enviado mediante <strong><?= htmlspecialchars($metodo) ?></strong>.
        </p>

        <?php if (empty($datos)): ?>
            <div class="mensaje-vacio">No se han recibido datos del formulario.</div>
        <?php else: ?>
            <section class="datos-recibidos">
                <?php foreach ($datos as $nombre => $valor): ?>
                    <div class="dato">
                        <span class="nombre-variable"><?= htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8') ?></span>
                        <span class="valor-variable"><?= mostrarValor($valor) ?></span>
                    </div>
                <?php endforeach; ?>
            </section>
        <?php endif; ?>

        <p class="nota">Archivo genérico para las prácticas de formularios HTML.</p>
        
    </main>
</body>
</html>
