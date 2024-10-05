# Define the folder where your HTML files are located
$folderPath = "C:\Users\arisbek.alikbaev\Course-2\Intermediate Level"  # Change this to your folder path

# HTML template with the <a> tag
$htmlTemplate = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="../index.html">Homepage</a>
</body>
</html>
"@

# Get all HTML files in the folder
$files = Get-ChildItem -Path $folderPath -Filter "*.html"

# Write the template to each HTML file
foreach ($file in $files) {
    Out-File -FilePath $file.FullName -InputObject $htmlTemplate -Encoding UTF8 -Force
    Write-Host "Updated $($file.Name)"
}
