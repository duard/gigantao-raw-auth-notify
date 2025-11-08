import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCBIRP', ['codemp', 'codirp'], { unique: true })
@Index('TCBIRP_I01', ['codemp', 'codentref', 'codinscr'], { unique: true })
@Entity('TCBIRP', { schema: 'SANKHYA' })
export class TcbirpEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODIRP' })
  codirp: number;

  @Column('char', { name: 'CODENTREF', length: 2 })
  codentref: string;

  @Column('char', { name: 'NOMEENTREF', length: 60 })
  nomeentref: string;

  @Column('char', { name: 'CODINSCR', length: 255 })
  codinscr: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbirps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbirps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
