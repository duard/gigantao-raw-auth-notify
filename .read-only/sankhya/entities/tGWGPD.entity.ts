import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGWGPD', ['codgpd', 'codprod'], { unique: true })
@Entity('TGWGPD', { schema: 'SANKHYA' })
export class TgwgpdEntity {
  @Column('int', { primary: true, name: 'CODGPD' })
  codgpd: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'COR', nullable: true, length: 7 })
  cor: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwgpds)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
