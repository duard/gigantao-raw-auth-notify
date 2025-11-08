import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFCCI', ['codconferencia'], { unique: true })
@Entity('TGFCCI', { schema: 'SANKHYA' })
export class TgfcciEntity {
  @Column('int', { primary: true, name: 'CODCONFERENCIA' })
  codconferencia: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'SEQUENCIA', default: () => '(-1)' })
  sequencia: number;

  @Column('varchar', { name: 'CAMPO', length: 20 })
  campo: string;

  @Column('varchar', { name: 'DESCRCAMPO', nullable: true, length: 20 })
  descrcampo: string | null;

  @Column('varchar', { name: 'CONFERENCIAOK', length: 1, default: () => "'N'" })
  conferenciaok: string;

  @Column('float', { name: 'REDIGITACAO', precision: 53, default: () => '(0)' })
  redigitacao: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'CODMOTIVO', nullable: true })
  codmotivo: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfccis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
