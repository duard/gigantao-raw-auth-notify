import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPPC', ['codppc'], { unique: true })
@Entity('TGFPPC', { schema: 'SANKHYA' })
export class TgfppcEntity {
  @Column('int', { primary: true, name: 'CODPPC' })
  codppc: number;

  @Column('char', { name: 'DESCRPPC', length: 40 })
  descrppc: string;

  @Column('smallint', { name: 'PESOPRECO', nullable: true })
  pesopreco: number | null;

  @Column('smallint', { name: 'PESOCONDPAG', nullable: true })
  pesocondpag: number | null;

  @Column('smallint', { name: 'PESOTAXAJURO', nullable: true })
  pesotaxajuro: number | null;

  @Column('smallint', { name: 'PESOPRAZOENTREG', nullable: true })
  pesoprazoentreg: number | null;

  @Column('smallint', { name: 'PESOQUALPROD', nullable: true })
  pesoqualprod: number | null;

  @Column('smallint', { name: 'PESOCONFIABFORN', nullable: true })
  pesoconfiabforn: number | null;

  @Column('smallint', { name: 'PESOQUALATEND', nullable: true })
  pesoqualatend: number | null;

  @Column('smallint', { name: 'PESOGARANTIA', nullable: true })
  pesogarantia: number | null;

  @Column('smallint', { name: 'PESOPRAZOMED', nullable: true })
  pesoprazomed: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'PESOAVALFORNEC', nullable: true })
  pesoavalfornec: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfppcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
