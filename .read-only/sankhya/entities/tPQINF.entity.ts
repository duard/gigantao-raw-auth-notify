import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqqueEntity } from './tPQQUE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TPQINF', ['sequencia', 'codquest'], { unique: true })
@Entity('TPQINF', { schema: 'SANKHYA' })
export class TpqinfEntity {
  @Column('int', { primary: true, name: 'CODQUEST' })
  codquest: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('text', { name: 'TEXTO', nullable: true })
  texto: string | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TpqqueEntity, (tpqqueEntity) => tpqqueEntity.tpqinfs)
  @JoinColumn([{ name: 'CODQUEST', referencedColumnName: 'codquest' }])
  codquest2: TpqqueEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqinfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
