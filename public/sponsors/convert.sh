for file in ~/fun/vastra/public/sponsors/*; do
  if [ -f "$file" ]; then
    convert "$file" "${file%.*}.png"
  fi
done
