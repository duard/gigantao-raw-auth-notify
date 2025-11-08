import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsdtbiEntity } from './tSDTBI.entity';

@Index('PK_TSDPAC', ['idpacote'], { unique: true })
@Entity('TSDPAC', { schema: 'SANKHYA' })
export class TsdpacEntity {
  @Column('int', { primary: true, name: 'IDPACOTE' })
  idpacote: number;

  @Column('varchar', { name: 'NOMEORIGEM', length: 50 })
  nomeorigem: string;

  @Column('datetime', { name: 'DHIMPORTACAO' })
  dhimportacao: Date;

  @Column('varchar', { name: 'NOMEARQUIVO', length: 100 })
  nomearquivo: string;

  @Column('int', { name: 'QTDTABELAS', nullable: true })
  qtdtabelas: number | null;

  @Column('smallint', { name: 'STATUS', nullable: true })
  status: number | null;

  @OneToMany(() => TsdtbiEntity, (tsdtbiEntity) => tsdtbiEntity.idpacote2)
  tsdtbis: TsdtbiEntity[];
}
