import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCBDPLR', ['tabela', 'tipo'], { unique: true })
@Entity('TCBDPLR', { schema: 'SANKHYA' })
export class TcbdplrEntity {
  @Column('varchar', { primary: true, name: 'TABELA', length: 6 })
  tabela: string;

  @Column('smallint', { primary: true, name: 'TIPO' })
  tipo: number;

  @Column('int', { name: 'ANO', nullable: true })
  ano: number | null;

  @Column('varchar', { name: 'VERSAO', nullable: true, length: 6 })
  versao: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbdplrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
