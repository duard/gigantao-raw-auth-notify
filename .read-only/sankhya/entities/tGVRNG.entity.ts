import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgvnogEntity } from './tGVNOG.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGVRNG', ['codnog', 'codprod', 'codparc', 'dtrng'], { unique: true })
@Entity('TGVRNG', { schema: 'SANKHYA' })
export class TgvrngEntity {
  @Column('int', { primary: true, name: 'CODNOG' })
  codnog: number;

  @Column('int', { primary: true, name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('float', { name: 'VALOR', precision: 53, default: () => '(0)' })
  valor: number;

  @Column('datetime', { primary: true, name: 'DTRNG' })
  dtrng: Date;

  @Column('datetime', { name: 'DTPERINI' })
  dtperini: Date;

  @Column('datetime', { name: 'DTPERFIM' })
  dtperfim: Date;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TgvnogEntity, (tgvnogEntity) => tgvnogEntity.tgvrngs)
  @JoinColumn([{ name: 'CODNOG', referencedColumnName: 'codnog' }])
  codnog2: TgvnogEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgvrngs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvrngs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgvrngs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
