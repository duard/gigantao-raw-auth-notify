import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwendEntity } from './tGWEND.entity';

@Index(
  'PK_TGFVOR',
  ['nunota', 'codusu', 'codvol', 'digitado', 'codprod', 'seqvol'],
  {
    unique: true,
  },
)
@Index('TGFVOR_I01', ['dhimpressao'], {})
@Entity('TGFVOR', { schema: 'SANKHYA' })
export class TgfvorEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('varchar', {
    primary: true,
    name: 'DIGITADO',
    length: 1,
    default: () => "'S'",
  })
  digitado: string;

  @Column('int', { name: 'QTDVOL', default: () => '(0)' })
  qtdvol: number;

  @Column('int', { primary: true, name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @Column('datetime', { name: 'DHIMPRESSAO', nullable: true })
  dhimpressao: Date | null;

  @Column('smallint', { primary: true, name: 'SEQVOL', default: () => '(0)' })
  seqvol: number;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfvors, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfvors)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfvors)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfvors)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgfvors)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TgwendEntity;
}
