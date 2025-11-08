import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgvavalEntity } from './tGVAVAL.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGVRAV', ['nurav'], { unique: true })
@Index('TGVRAV_01', ['nunota'], {})
@Entity('TGVRAV', { schema: 'SANKHYA' })
export class TgvravEntity {
  @Column('int', { primary: true, name: 'NURAV' })
  nurav: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUMCOTACAO', nullable: true })
  numcotacao: number | null;

  @Column('datetime', { name: 'DTRAV' })
  dtrav: Date;

  @Column('float', { name: 'VALOR', precision: 53, default: () => '(0)' })
  valor: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'VALIDADE' })
  validade: Date;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgvravs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgvravs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgvavalEntity, (tgvavalEntity) => tgvavalEntity.tgvravs)
  @JoinColumn([{ name: 'CODAVAL', referencedColumnName: 'codaval' }])
  codaval: TgvavalEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgvravs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvravs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
