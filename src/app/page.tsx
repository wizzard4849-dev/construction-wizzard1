cat > /mnt/user-data/outputs/page.tsx << 'EOF'
import { redirect } from 'next/navigation'

export default function RootPage() {
  redirect('/construction-wizzard.html')
}
EOF
echo "done"
Output
