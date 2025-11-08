import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tpqpe1Entity } from './tPQPE1.entity';
import { TpqrpoEntity } from './tPQRPO.entity';

@Index('PK_TPQRP1', ['nurespperg', 'codquest', 'codperg'], { unique: true })
@Entity('TPQRP1', { schema: 'SANKHYA' })
export class Tpqrp1Entity {
  @Column('int', { primary: true, name: 'NURESPPERG' })
  nurespperg: number;

  @Column('int', { primary: true, name: 'CODQUEST' })
  codquest: number;

  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('varchar', { name: 'SIMNAO', length: 1, default: () => "'S'" })
  simnao: string;

  @Column('int', { name: 'PONTUACAO' })
  pontuacao: number;

  @Column('varchar', { name: 'IMPEDITIVA', length: 1, default: () => "'S'" })
  impeditiva: string;

  @ManyToOne(() => Tpqpe1Entity, (tpqpe1Entity) => tpqpe1Entity.tpqrps)
  @JoinColumn([
    { name: 'CODQUEST', referencedColumnName: 'codquest' },
    { name: 'CODPERG', referencedColumnName: 'codperg' },
  ])
  tpqpe: Tpqpe1Entity;

  @ManyToOne(() => TpqrpoEntity, (tpqrpoEntity) => tpqrpoEntity.tpqrps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NURESPPERG', referencedColumnName: 'nurespperg' }])
  nurespperg2: TpqrpoEntity;
}
