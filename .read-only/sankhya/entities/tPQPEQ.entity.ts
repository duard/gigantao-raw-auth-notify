import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqperEntity } from './tPQPER.entity';
import { TpqqueEntity } from './tPQQUE.entity';

@Index('PK_TPQPEQ', ['codquest', 'codperg'], { unique: true })
@Entity('TPQPEQ', { schema: 'SANKHYA' })
export class TpqpeqEntity {
  @Column('int', { primary: true, name: 'CODQUEST' })
  codquest: number;

  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'APELIDO', nullable: true, length: 10 })
  apelido: string | null;

  @Column('int', { name: 'PESO', nullable: true })
  peso: number | null;

  @ManyToOne(() => TpqperEntity, (tpqperEntity) => tpqperEntity.tpqpeqs)
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg2: TpqperEntity;

  @ManyToOne(() => TpqqueEntity, (tpqqueEntity) => tpqqueEntity.tpqpeqs)
  @JoinColumn([{ name: 'CODQUEST', referencedColumnName: 'codquest' }])
  codquest2: TpqqueEntity;
}
