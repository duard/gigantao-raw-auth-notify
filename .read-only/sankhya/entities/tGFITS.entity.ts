import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFITS', ['nunota', 'sequencia'], { unique: true })
@Index('TGFITS_I01', ['codemp', 'codprod', 'controle', 'codlocal'], {})
@Entity('TGFITS', { schema: 'SANKHYA' })
export class TgfitsEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'CODLOCAL', nullable: true })
  codlocal: number | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 11 })
  controle: string | null;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('float', { name: 'QTDENT', precision: 53, default: () => '(0)' })
  qtdent: number;

  @Column('float', { name: 'QTDSAI', precision: 53, default: () => '(0)' })
  qtdsai: number;

  @OneToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfits, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfits)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfits)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
