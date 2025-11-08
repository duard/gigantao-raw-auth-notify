import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCBDIN', ['tabela', 'codigo'], { unique: true })
@Entity('TCBDIN', { schema: 'SANKHYA' })
export class TcbdinEntity {
  @Column('varchar', { primary: true, name: 'TABELA', length: 15 })
  tabela: string;

  @Column('varchar', { primary: true, name: 'CODIGO', length: 10 })
  codigo: string;

  @Column('varchar', { name: 'TIPOLANC', nullable: true, length: 1 })
  tipolanc: string | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 400 })
  descricao: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbdins)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
