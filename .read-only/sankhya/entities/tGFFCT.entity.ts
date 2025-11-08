import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiremEntity } from './tSIREM.entity';
import { TsictaEntity } from './tSICTA.entity';

@Index('PK_TGFFCT', ['codformrem', 'modulo', 'codctabcoint'], { unique: true })
@Entity('TGFFCT', { schema: 'SANKHYA' })
export class TgffctEntity {
  @Column('int', { primary: true, name: 'CODFORMREM' })
  codformrem: number;

  @Column('char', {
    primary: true,
    name: 'MODULO',
    length: 1,
    default: () => "'B'",
  })
  modulo: string;

  @Column('smallint', { primary: true, name: 'CODCTABCOINT' })
  codctabcoint: number;

  @ManyToOne(() => TsiremEntity, (tsiremEntity) => tsiremEntity.tgffcts)
  @JoinColumn([
    { name: 'MODULO', referencedColumnName: 'modulo' },
    { name: 'CODFORMREM', referencedColumnName: 'codigo' },
  ])
  tsirem: TsiremEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgffcts)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint2: TsictaEntity;
}
