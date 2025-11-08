import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimltvEntity } from './tIMLTV.entity';
import { TimclaEntity } from './tIMCLA.entity';
import { TimadmEntity } from './tIMADM.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TimcnfEntity } from './tIMCNF.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TIMMFD', ['mfdsequence'], { unique: true })
@Entity('TIMMFD', { schema: 'SANKHYA' })
export class TimmfdEntity {
  @Column('int', { primary: true, name: 'MFDSEQUENCE' })
  mfdsequence: number;

  @Column('varchar', { name: 'MFDDESCRICAO', length: 100 })
  mfddescricao: string;

  @Column('char', { name: 'MFDPRODUTO', length: 2 })
  mfdproduto: string;

  @Column('float', { name: 'MFDVLRNOTA', nullable: true, precision: 53 })
  mfdvlrnota: number | null;

  @Column('datetime', { name: 'MFDDHALTER', default: () => 'getdate()' })
  mfddhalter: Date;

  @Column('datetime', { name: 'MFDDHINCLUSAO', default: () => 'getdate()' })
  mfddhinclusao: Date;

  @Column('char', { name: 'MFDLEGADO', nullable: true, length: 1 })
  mfdlegado: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timmfds)
  @JoinColumn([{ name: 'MFDUSUALTEROU', referencedColumnName: 'codusu' }])
  mfdusualterou: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timmfds2)
  @JoinColumn([{ name: 'MFDUSUINCLUIU', referencedColumnName: 'codusu' }])
  mfdusuincluiu: TsiusuEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timmfds)
  @JoinColumn([{ name: 'MFDCONTRATOLOC', referencedColumnName: 'loccodigo' }])
  mfdcontratoloc: TimlocEntity;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timmfds)
  @JoinColumn([{ name: 'MFDCONTRATOLTV', referencedColumnName: 'ltvcodigo' }])
  mfdcontratoltv: TimltvEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timmfds)
  @JoinColumn([{ name: 'MFDCONTRATOCLA', referencedColumnName: 'clacodigo' }])
  mfdcontratocla: TimclaEntity;

  @ManyToOne(() => TimadmEntity, (timadmEntity) => timadmEntity.timmfds)
  @JoinColumn([
    { name: 'MFDCONTRATOADM', referencedColumnName: 'admnucontrato' },
  ])
  mfdcontratoadm: TimadmEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.timmfds)
  @JoinColumn([{ name: 'MFDNUNOTA', referencedColumnName: 'nunota' }])
  mfdnunota: TgfcabEntity;

  @ManyToOne(() => TimcnfEntity, (timcnfEntity) => timcnfEntity.timmfds)
  @JoinColumn([{ name: 'MFDMODNOTA', referencedColumnName: 'cnfnunota' }])
  mfdmodnota: TimcnfEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timmfds)
  @JoinColumn([{ name: 'MFDPARCEIRO', referencedColumnName: 'codparc' }])
  mfdparceiro: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timmfds2)
  @JoinColumn([{ name: 'MFDCORRESPBANC', referencedColumnName: 'codparc' }])
  mfdcorrespbanc: TgfparEntity;
}
