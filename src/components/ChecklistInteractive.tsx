import { useState, useEffect } from 'react';
import { Check, Copy, Printer, Share2, RotateCcw } from 'lucide-react';
import { Checklist, ChecklistItem } from '@/data/checklists';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ChecklistInteractiveProps {
  checklist: Checklist;
}

const ChecklistInteractive = ({ checklist }: ChecklistInteractiveProps) => {
  const storageKey = `checklist-${checklist.id}`;
  
  const [checkedItems, setCheckedItems] = useState<Set<string>>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify([...checkedItems]));
  }, [checkedItems, storageKey]);

  const toggleItem = (itemId: string) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const resetChecklist = () => {
    setCheckedItems(new Set());
    toast.success('Checklistan har återställts');
  };

  const copyToClipboard = () => {
    const text = checklist.items
      .map((item) => `${checkedItems.has(item.id) ? '✓' : '☐'} ${item.text}`)
      .join('\n');
    
    navigator.clipboard.writeText(`${checklist.title}\n\n${text}`);
    toast.success('Kopierat till urklipp!');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: checklist.title,
          text: checklist.description,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Länk kopierad!');
    }
  };

  const progress = Math.round((checkedItems.size / checklist.items.length) * 100);

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="bg-card rounded-xl p-4 border border-border shadow-card">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Framsteg</span>
          <span className="text-sm text-muted-foreground">
            {checkedItems.size} av {checklist.items.length} klara
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-success transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 no-print">
        <Button variant="outline" size="sm" onClick={copyToClipboard} className="gap-2">
          <Copy className="w-4 h-4" />
          Kopiera
        </Button>
        <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2">
          <Printer className="w-4 h-4" />
          Skriv ut
        </Button>
        <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
          <Share2 className="w-4 h-4" />
          Dela
        </Button>
        {checkedItems.size > 0 && (
          <Button variant="ghost" size="sm" onClick={resetChecklist} className="gap-2 text-muted-foreground">
            <RotateCcw className="w-4 h-4" />
            Återställ
          </Button>
        )}
      </div>

      {/* Checklist items */}
      <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden divide-y divide-border">
        {checklist.items.map((item, index) => (
          <ChecklistItemRow
            key={item.id}
            item={item}
            index={index}
            isChecked={checkedItems.has(item.id)}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>

      {/* Completion message */}
      {progress === 100 && (
        <div className="bg-success/10 border border-success/20 rounded-xl p-6 text-center animate-fade-in">
          <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-3">
            <Check className="w-6 h-6 text-success-foreground" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">Grattis!</h3>
          <p className="text-muted-foreground text-sm">Du har slutfört hela checklistan.</p>
        </div>
      )}
    </div>
  );
};

interface ChecklistItemRowProps {
  item: ChecklistItem;
  index: number;
  isChecked: boolean;
  onToggle: () => void;
}

const ChecklistItemRow = ({ item, index, isChecked, onToggle }: ChecklistItemRowProps) => {
  return (
    <button
      onClick={onToggle}
      className={`w-full text-left checklist-item ${isChecked ? 'checklist-item-checked' : ''}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div
        className={`checkbox-custom flex-shrink-0 ${isChecked ? 'checkbox-custom-checked' : ''}`}
      >
        {isChecked && <Check className="w-3 h-3 animate-checkmark" />}
      </div>
      <div className="flex-1 min-w-0">
        <span className={`block ${isChecked ? 'line-through' : ''}`}>{item.text}</span>
        {item.description && (
          <span className="text-sm text-muted-foreground mt-1 block">{item.description}</span>
        )}
      </div>
    </button>
  );
};

export default ChecklistInteractive;
