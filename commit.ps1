$ErrorActionPreference = "Stop"
Set-Location "C:\Users\imani\Downloads\PROJECT\PACIFIQUE\MY_PORTFOLIO"
# tracked modified files (excluding package-lock and deleted Skills)
$tracked = git diff --name-only
$commitList = @()
foreach ($f in $tracked) {
    if ($f -eq "package-lock.json") { continue }
    if ($f -eq "src/Components/Skills.css") { continue }
    if ($f -eq "src/Components/Skills.jsx") { continue }
    $commitList += $f
}
# untracked files
$untracked = git ls-files --others --exclude-standard
foreach ($f in $untracked) {
    $commitList += $f
}
Write-Host "Total to commit: $($commitList.Count)"
foreach ($f in $commitList) {
    git add -- $f
    git commit -m "Add one line to $f" -- $f
    if ($LASTEXITCODE -ne 0) { Write-Host "FAILED: $f"; break }
}
Write-Host "Done"
EOF